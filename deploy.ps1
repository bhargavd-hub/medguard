# ============================================================
#  MEDGUARD — One-Click Vercel Deploy Script for Windows
#  Double-click this file OR run in PowerShell:
#     .\deploy.ps1
# ============================================================

$ErrorActionPreference = "Stop"

# ── Colors ──────────────────────────────────────────────────
function Green($msg)  { Write-Host $msg -ForegroundColor Green }
function Yellow($msg) { Write-Host $msg -ForegroundColor Yellow }
function Red($msg)    { Write-Host $msg -ForegroundColor Red }
function Cyan($msg)   { Write-Host $msg -ForegroundColor Cyan }

Clear-Host
Cyan  "=============================================="
Cyan  "   MEDGUARD — Vercel Deployment Script"
Cyan  "=============================================="
Write-Host ""

# ── Step 1: Check Node.js ────────────────────────────────────
Yellow "[ 1/5 ] Checking Node.js..."
try {
    $nodeVersion = node -v 2>&1
    Green "       Node.js found: $nodeVersion"
} catch {
    Red "ERROR: Node.js is not installed."
    Write-Host "  Please download from: https://nodejs.org (LTS version)"
    Write-Host "  Then restart this script."
    Read-Host "Press Enter to exit"
    exit 1
}

# ── Step 2: Install dependencies ────────────────────────────
Yellow "[ 2/5 ] Installing dependencies (npm install)..."
try {
    npm install --legacy-peer-deps --silent
    Green "       Dependencies installed successfully."
} catch {
    Red "ERROR: npm install failed. Check your internet connection."
    Read-Host "Press Enter to exit"
    exit 1
}

# ── Step 3: Build the project ───────────────────────────────
Yellow "[ 3/5 ] Building the Next.js project..."
try {
    npm run build
    Green "       Build successful!"
} catch {
    Red "ERROR: Build failed. Check the error above."
    Read-Host "Press Enter to exit"
    exit 1
}

# ── Step 4: Install Vercel CLI ───────────────────────────────
Yellow "[ 4/5 ] Checking Vercel CLI..."
$vercelInstalled = $null
try {
    $vercelInstalled = vercel --version 2>&1
} catch { }

if (-not $vercelInstalled) {
    Yellow "       Installing Vercel CLI globally..."
    npm install -g vercel --silent
    Green "       Vercel CLI installed."
} else {
    Green "       Vercel CLI found: $vercelInstalled"
}

# ── Step 5: Deploy ───────────────────────────────────────────
Yellow "[ 5/5 ] Deploying to Vercel..."
Write-Host ""
Yellow "  A browser window will open for you to log in to Vercel."
Yellow "  After logging in, come back here and answer the prompts."
Write-Host ""
Write-Host "  Suggested answers:"
Write-Host "  - Set up and deploy? → Y"
Write-Host "  - Which scope?       → bhargavd-2219s-projects"
Write-Host "  - Link to existing?  → N"
Write-Host "  - Project name?      → medguard"
Write-Host "  - Directory?         → ./ (just press Enter)"
Write-Host ""
Read-Host "  Press Enter when ready to start deployment..."

try {
    vercel --prod --scope bhargavd-2219s-projects
    Write-Host ""
    Green "=============================================="
    Green "  SUCCESS! Your site is live on Vercel!"
    Green "  Check your terminal above for the live URL."
    Green "=============================================="
} catch {
    Red "Deployment encountered an issue. Try running manually:"
    Yellow "  vercel --prod"
}

Write-Host ""
Read-Host "Press Enter to close"
