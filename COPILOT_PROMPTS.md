# 💬 Copilot Prompts for Common Tasks

Use these prompts with GitHub Copilot Chat to get helpful responses.

---

## 🚀 General Deployment Prompt

**When:** Need general help with deployment
**Send this to Copilot:**

```
I have a Vite React app deployed to GitHub Pages using GitHub Actions.

Project Details:
- Repository: Foodwebappdashboard
- Base path: /Foodwebappdashboard/
- Deployed via: GitHub Actions workflow
- GitHub Pages setting: Deploy from "GitHub Actions"

Current Setup:
- vite.config.ts has base: '/Foodwebappdashboard/'
- .github/workflows/deploy.yml handles build and deploy
- Deployment to dist/ folder

Current Status: [Choose one]
1. First deployment in progress
2. Site shows blank page
3. Deployment succeeded but has issues
4. Want to optimize deployment
5. Other: [describe your issue]

Can you help me:
- Understand why [your issue]?
- Know what to check in GitHub Actions?
- Fix the current problem?
```

---

## ❌ Blank Page Troubleshooting Prompt

**When:** Site still shows blank page after deployment
**Send this to Copilot:**

```
My Vite React app with GitHub Pages is showing a blank page.

Details:
- Repository: beyondstrong62/Foodwebappdashboard
- URL: https://beyondstrong62.github.io/Foodwebappdashboard/
- Base path in vite.config.ts: /Foodwebappdashboard/
- Deployment: Via GitHub Actions to dist/ folder
- GitHub Pages source: GitHub Actions

When I open the site:
- ✅ Page loads (no 404 error)
- ❌ No content visible (blank white page)
- Browser console shows: [Paste any error messages here]

Already tried:
- Hard refresh (Ctrl+Shift+R)
- Cleared browser cache
- Verified GitHub Actions succeeded
- Checked dist/ folder has files

What could cause this and how do I fix it?
```

---

## 🔧 Build Error Troubleshooting Prompt

**When:** GitHub Actions build fails
**Send this to Copilot:**

```
My GitHub Actions workflow for Vite React app is failing.

Repository: beyondstrong62/Foodwebappdashboard
Workflow file: .github/workflows/deploy.yml

Error message from GitHub Actions: [Paste the error here]

Steps executed before failure:
1. [Which step failed] ← Failed here
2. [Next steps didn't run]

My vite.config.ts has:
- base: '/Foodwebappdashboard/'
- React plugin enabled
- Tailwind CSS configured

package.json scripts:
- "dev": "vite"
- "build": "vite build"

When I run `npm run build` locally: [succeeds/fails]

How do I fix this build error in GitHub Actions?
```

---

## 📚 Learning/Understanding Prompts

**Understanding GitHub Actions:**

```
I want to understand how GitHub Actions works for my Vite React deployment.

My setup:
- Vite React app
- GitHub Actions workflow defined
- Deploying to GitHub Pages
- Base path: /Foodwebappdashboard/

Can you explain:
1. When does the workflow trigger?
2. What does each step in the workflow do?
3. How does GitHub Actions know where to deploy?
4. What's the difference between GitHub Actions and manual deployment?
5. How do I know if deployment succeeded?
```

**Understanding Base Path:**

```
I'm confused about the base path in Vite.

My app is at: https://beyondstrong62.github.io/Foodwebappdashboard/

I have set: base: '/Foodwebappdashboard/' in vite.config.ts

Can you explain:
1. Why do I need this base path?
2. What goes wrong without it?
3. How does Vite use this during build?
4. How do I know if my base path is correct?
5. What if I change my repository name?
```

**Understanding Deployment Process:**

```
Help me understand the full deployment process:
1. What happens when I run `npm run build`?
2. What's in the dist/ folder?
3. Why is dist/ deployed instead of src/?
4. How does GitHub Pages serve dist/ folder?
5. What's the role of index.html?
6. Where do CSS and JS files go?
7. Why do paths matter (base path)?
```

---

## 🐛 Common Issues Prompts

**Site works locally but not on GitHub Pages:**

```
My Vite React app works perfectly locally but is blank on GitHub Pages.

Local: http://localhost:5173/Foodwebappdashboard/ → Works ✅
GitHub Pages: https://beyondstrong62.github.io/Foodwebappdashboard/ → Blank ❌

Details:
- Deployment succeeded (GitHub Actions ✅)
- Browser console: [Any errors? Paste them]
- vite.config.ts base: '/Foodwebappdashboard/'
- No errors during npm run build

What could be wrong?
```

**GitHub Actions keeps failing:**

```
My GitHub Actions workflow keeps failing.

Workflow file: .github/workflows/deploy.yml
Repository: beyondstrong62/Foodwebappdashboard

Recent attempts:
- [Date]: Failed at [step name]
- [Date]: Failed at [step name]
- [Date]: Failed at [step name]

Last error: [Paste error message]

It's been failing for: [days/attempts]

What systematic approach should I take to debug this?
```

---

## 📝 How to Use These Prompts

### Step 1: Choose the right prompt
- Pick the one that matches your situation
- If none match exactly, combine relevant parts

### Step 2: Customize for your case
- Replace `[placeholders]` with your actual information
- Add specific error messages
- Include what you've already tried

### Step 3: Send to Copilot
- Open GitHub Copilot Chat
- Paste the customized prompt
- Add any additional context relevant to your issue

### Step 4: Follow up
- Ask clarifying questions if needed
- Request code examples
- Ask for step-by-step instructions

---

## 💡 Pro Tips for Better Copilot Responses

### 1. Be Specific
❌ "It's not working"
✅ "The site loads but all images fail to load"

### 2. Include Error Messages
❌ "Build failed"
✅ "Build failed with error: Cannot find module '@/components/Card'"

### 3. Show What You've Tried
❌ "How do I fix this?"
✅ "I've tried [A], [B], and [C] but nothing worked"

### 4. Provide Full Context
❌ "Should I use GitHub Actions?"
✅ "My Vite React app is deployed to GitHub Pages. Should I use GitHub Actions or manual deployment? Here's my workflow..."

### 5. Ask for Examples
❌ "How do I configure GitHub Actions?"
✅ "Can you show me an example GitHub Actions workflow for Vite React with base path?"

---

## 🎯 Quick Reference

| Problem | Prompt Type |
|---------|------------|
| Site shows blank | Blank Page Troubleshooting |
| Build fails | Build Error Troubleshooting |
| Don't understand process | Learning/Understanding |
| Works locally but not deployed | Common Issues → Local vs Deployed |
| Workflow keeps failing | Common Issues → Keep Failing |
| Want to learn base path | Learning → Understanding Base Path |
| Want to understand process | Learning → Understanding Deployment |

---

## ⚡ Fastest Way to Get Help

```
When in doubt, send Copilot:
1. Your repo URL
2. Your current problem
3. Error message (if any)
4. What you've already tried
5. What you want to achieve

Copilot handles the rest! 🤖
```

---

## 📚 Related Files in Your Repo

- `DEPLOYMENT_ANALYSIS.md` - Detailed explanation of issues
- `GITHUB_ACTIONS_SETUP.md` - Step-by-step GitHub Actions setup
- `vite.config.ts` - Your build configuration
- `.github/workflows/deploy.yml` - Your GitHub Actions workflow
- `package.json` - Your dependencies and scripts

**You have everything documented!** 📝
