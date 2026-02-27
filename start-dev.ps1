Write-Host "================================" -ForegroundColor Green
Write-Host "Starting Kavya's Portfolio Dev Server" -ForegroundColor Green
Write-Host "================================" -ForegroundColor Green
Write-Host ""

# Navigate to project directory
Set-Location "c:\Users\kavya\kavya-portfolio"

Write-Host "Checking if npm is installed..." -ForegroundColor Yellow
npm --version

Write-Host ""
Write-Host "Starting development server..." -ForegroundColor Yellow
Write-Host "This may take a few seconds on first run..." -ForegroundColor Cyan
Write-Host ""

# Start the dev server
npm run dev

# Keep window open if there's an error
if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Something went wrong!" -ForegroundColor Red
    Write-Host "Press any key to close this window..." -ForegroundColor Yellow
    $null = $Host.UI.RawUI.ReadKey("NoEcho,IncludeKeyDown")
}
