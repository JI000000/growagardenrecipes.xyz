const fs = require('fs');
const path = require('path');

// 需要添加ESLint禁用规则的文件
const files = [
  'src/app/codes/page.tsx',
  'src/app/page.tsx',
  'src/app/recipes/burger/page.tsx',
  'src/app/recipes/cake/page.tsx',
  'src/app/recipes/donut/page.tsx',
  'src/app/recipes/hot-dog/page.tsx',
  'src/app/recipes/ice-cream/page.tsx',
  'src/app/recipes/pie/page.tsx',
  'src/app/recipes/pizza/page.tsx',
  'src/app/recipes/porridge/page.tsx',
  'src/app/recipes/prismatic/page.tsx',
  'src/app/recipes/prismatic-fusion/page.tsx',
  'src/app/recipes/salad/page.tsx',
  'src/app/recipes/sandwich/page.tsx',
  'src/app/recipes/soup/page.tsx',
  'src/app/recipes/sushi/page.tsx',
  'src/app/recipes/waffle/page.tsx',
  'src/app/wiki/characters/page.tsx',
  'src/app/wiki/page.tsx',
];

// 添加ESLint禁用规则
function addEslintDisable(filePath) {
  console.log(`Processing: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');

  // 检查文件是否已经包含ESLint禁用规则
  if (content.includes('eslint-disable react/no-unescaped-entities')) {
    console.log(`File already has ESLint disable rule: ${filePath}`);
    return false;
  }

  // 在文件顶部添加ESLint禁用规则
  const newContent = `/* eslint-disable react/no-unescaped-entities */\n${content}`;

  fs.writeFileSync(filePath, newContent, 'utf8');
  console.log(`Added ESLint disable rule to: ${filePath}`);
  return true;
}

// 主函数
function main() {
  let modifiedFiles = 0;

  files.forEach((filePath) => {
    const fullPath = path.join(process.cwd(), filePath);

    if (fs.existsSync(fullPath)) {
      if (addEslintDisable(fullPath)) {
        modifiedFiles++;
      }
    } else {
      console.error(`File not found: ${fullPath}`);
    }
  });

  console.log(`Added ESLint disable rule to ${modifiedFiles} files.`);
}

main();
