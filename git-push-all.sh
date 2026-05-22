#!/bin/bash
# My_Projects - 一鍵 push 所有有變更的子專案
# 只處理有 git remote + 有未推送 commit 的專案

ROOT="/mnt/e/My_Projects"

echo "═══════════════════════════════════"
echo " My_Projects - Git 批量推送"
echo "$(date '+%Y-%m-%d %H:%M')"
echo "═══════════════════════════════════"

# 先 push 主 repo
cd "$ROOT"
if [[ -n $(git status --porcelain) ]]; then
    echo ""
    echo ">>> [主 repo] My_Projects 有變更，推送中..."
    git add -A
    git commit -m "auto-update $(date '+%Y-%m-%d %H:%M')"
    git push origin main && echo "    ✅ My_Projects 推送成功" || echo "    ❌ My_Projects 推送失敗"
else
    echo ""
    echo ">>> [主 repo] My_Projects 無變更，跳過"
fi

# 掃描子 repo
find "$ROOT" -type d -name ".git" -not -path "*/.git/*" | while read gitdir; do
    dir=$(dirname "$gitdir")
    cd "$dir"
    
    remote=$(git remote get-url origin 2>/dev/null)
    [ -z "$remote" ] && continue
    
    name=$(basename "$dir")
    
    # 檢查是否有未 commit 的變更
    if [[ -z $(git status --porcelain) ]]; then
        # 沒有未 commit 的變更，檢查是否有未 push 的 commit
        behind=$(git rev-list --count origin/HEAD..HEAD 2>/dev/null || echo "0")
        if [ "$behind" = "0" ] || [ -z "$behind" ]; then
            echo "    ⏭️  $name 無變更，跳過"
            continue
        fi
    fi
    
    echo ""
    echo ">>> [$name] 有變更／未推送 commit，推送中..."
    
    git add -A
    git diff --cached --quiet 2>/dev/null || git commit -m "auto-update $(date '+%Y-%m-%d %H:%M')"
    git push origin main 2>&1 && echo "    ✅ $name 推送成功" || echo "    ❌ $name 推送失敗"
done

echo ""
echo "═══════════════════════════════════"
echo " 全部完成！"
