#!/bin/bash
# Install Vercel and Next.js Agent Skills for Web Dev

# Ensure the skills subfolder exists
mkdir -p skills

echo "Installing Vercel Agent Skills via Vercel Labs CLI..."
npx skills add vercel-labs/agent-skills --agent * --all --copy --yes

# Download Next.js canary specific skills from next.js repo
echo "Downloading Next.js canary agent skills..."
mkdir -p skills/next-dev-loop
curl -fsSL https://raw.githubusercontent.com/vercel/next.js/canary/skills/next-dev-loop/SKILL.md -o skills/next-dev-loop/SKILL.md

# Copy project-level installed skills from default .agents directory to the 'skills' folder
if [ -d ".agents/skills" ]; then
  cp -r .agents/skills/* skills/
  echo "Skills synced to skills/ directory."
fi

echo "Skills installation complete."
