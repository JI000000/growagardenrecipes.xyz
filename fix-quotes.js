const fs = require('fs');
const path = require('path');

// 错误报告中提到的文件和行号
const errorFiles = {
  'src/app/codes/page.tsx': [157, 173, 339, 353],
  'src/app/page.tsx': [205],
  'src/app/recipes/burger/page.tsx': [522, 544],
  'src/app/recipes/cake/page.tsx': [534, 559],
  'src/app/recipes/donut/page.tsx': [504, 529],
  'src/app/recipes/hot-dog/page.tsx': [527, 549],
  'src/app/recipes/ice-cream/page.tsx': [530, 552],
  'src/app/recipes/pie/page.tsx': [503, 528],
  'src/app/recipes/pizza/page.tsx': [631, 655],
  'src/app/recipes/porridge/page.tsx': [612, 634],
  'src/app/recipes/prismatic/page.tsx': [
    223, 233, 248, 249, 325, 374, 397, 400, 401, 405, 470, 480, 716, 771,
  ],
  'src/app/recipes/prismatic-fusion/page.tsx': [137, 153, 298, 310],
  'src/app/recipes/salad/page.tsx': [505, 530],
  'src/app/recipes/sandwich/page.tsx': [532, 554],
  'src/app/recipes/soup/page.tsx': [502, 527],
  'src/app/recipes/sushi/page.tsx': [523, 545],
  'src/app/recipes/waffle/page.tsx': [508, 533],
  'src/app/wiki/characters/page.tsx': [
    433, 634, 635, 659, 660, 666, 671, 685, 692, 697, 702, 738, 836, 878,
  ],
  'src/app/wiki/page.tsx': [202, 203, 218],
};

// 修复文件中的引号
function fixFile(filePath, lineNumbers) {
  console.log(`Processing: ${filePath}`);
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');

  let modified = false;

  lineNumbers.forEach((lineNum) => {
    // 行号从1开始，但数组索引从0开始
    const index = lineNum - 1;

    if (index >= 0 && index < lines.length) {
      const line = lines[index];
      let newLine = line;

      // 只替换JSX文本中的引号，不替换JavaScript代码中的引号
      // 查找形如 text="content" 或 text='content' 中的内容
      newLine = newLine.replace(/(>|=")([^<>"]*?)(")/g, (match, p1, p2, p3) => {
        return p1 + p2.replace(/"/g, '&quot;') + p3;
      });

      newLine = newLine.replace(/(>|=')([^<>']*?)(')/g, (match, p1, p2, p3) => {
        return p1 + p2.replace(/'/g, '&apos;') + p3;
      });

      // 查找JSX文本中的引号
      newLine = newLine.replace(/(>)([^<>]*?)(<)/g, (match, p1, p2, p3) => {
        return p1 + p2.replace(/"/g, '&quot;').replace(/'/g, '&apos;') + p3;
      });

      if (newLine !== line) {
        lines[index] = newLine;
        modified = true;
        console.log(`Fixed line ${lineNum}: ${line} -> ${newLine}`);
      }
    }
  });

  if (modified) {
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
    console.log(`Fixed quotes in: ${filePath}`);
    return true;
  }

  return false;
}

// 主函数
function main() {
  let fixedFiles = 0;

  Object.entries(errorFiles).forEach(([filePath, lineNumbers]) => {
    const fullPath = path.join(process.cwd(), filePath);

    if (fs.existsSync(fullPath)) {
      if (fixFile(fullPath, lineNumbers)) {
        fixedFiles++;
      }
    } else {
      console.error(`File not found: ${fullPath}`);
    }
  });

  console.log(`Fixed quotes in ${fixedFiles} files.`);
}

main();
