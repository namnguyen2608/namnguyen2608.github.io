# Deploy script - Build and copy output to root for GitHub Pages
Write-Host "Building project..." -ForegroundColor Cyan
npm run build

if ($LASTEXITCODE -ne 0) {
    Write-Host "Build failed!" -ForegroundColor Red
    exit 1
}

Write-Host "Copying build output to root..." -ForegroundColor Cyan

# Copy dist/index.html to root (overwrite the dev version)
Copy-Item -Path "dist\index.html" -Destination "index.html" -Force

# Copy dist/assets to root/assets (overwrite old build)
if (Test-Path "assets") {
    Remove-Item -Path "assets" -Recurse -Force
}
Copy-Item -Path "dist\assets" -Destination "assets" -Recurse -Force

Write-Host "Done! Files ready to commit and push." -ForegroundColor Green
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "  git add ."
Write-Host "  git commit -m 'Update portfolio'"
Write-Host "  git push"
