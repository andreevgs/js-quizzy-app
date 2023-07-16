const fs = require('fs');
const path = require('path');

const jsonFileRu = 'src/pages/javascript/ru/javascript.json';
const jsonFileEn = 'src/pages/javascript/en/javascript.json';

function getCombinedDataFromDirectory(directory, level) {
  try {
    const files = fs.readdirSync(directory);
    let combinedContentArray = [];
    files.sort((a, b) => {
      const numA = parseInt(a.match(/\d+/)[0]);
      const numB = parseInt(b.match(/\d+/)[0]);
      return numA - numB;
    });
    files.forEach((file) => {
      const filePath = path.join(directory, file);

      let content = fs.readFileSync(filePath, 'utf-8');
      const titleStartIndex = content.indexOf('### ') + 4;
      const titleEndIndex = content.indexOf('\n\n');
      const title = content.substring(titleStartIndex, titleEndIndex);
      content = content.replace(`### ${title}\n\n`, '');
      content = content.trim();
      combinedContentArray.push({ title, content, level });
    });

    return combinedContentArray;
  } catch (err) {
    console.error('Ошибка чтения директории:', err);
    return null;
  }
}

const fullCombinedContentArrayRu = JSON.stringify([
  ...getCombinedDataFromDirectory('src/pages/javascript/ru/junior', 'Junior'),
  ...getCombinedDataFromDirectory('src/pages/javascript/ru/middle', 'Middle'),
  ...getCombinedDataFromDirectory('src/pages/javascript/ru/senior', 'Senior'),
]);

const fullCombinedContentArrayEn = JSON.stringify([
  ...getCombinedDataFromDirectory('src/pages/javascript/en/junior', 'Junior'),
  ...getCombinedDataFromDirectory('src/pages/javascript/en/middle', 'Middle'),
  ...getCombinedDataFromDirectory('src/pages/javascript/en/senior', 'Senior'),
]);

fs.writeFile(jsonFileRu, fullCombinedContentArrayRu, 'utf-8', (err) => {
  if (err) {
    console.error('Ошибка записи файла javascript.json:', err);
    return;
  }

  console.log('Запись в файл javascript.json успешно выполнена');
});

fs.writeFile(jsonFileEn, fullCombinedContentArrayEn, 'utf-8', (err) => {
  if (err) {
    console.error('Error writing file javascript.json:', err);
    return;
  }

  console.log('Writing to file javascript.json successfully completed');
});
