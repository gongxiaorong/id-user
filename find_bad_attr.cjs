const fs = require('fs');
const s = fs.readFileSync('index.html', 'utf8');
// locate script block(s)
const scriptStart = s.indexOf('<script>');
const scriptEnd = s.indexOf('</script>', scriptStart);
console.log('scriptStart=', scriptStart, 'scriptEnd=', scriptEnd, 'fileLen=', s.length);
if (scriptStart >= 0 && scriptEnd > scriptStart) {
  const script = s.slice(scriptStart, scriptEnd);
  const m = script.match(/data-page-node-id/g);
  console.log('data-page-node-id inside <script>:', m ? m.length : 0);
  if (m) {
    // show context of first few
    let idx = script.indexOf('data-page-node-id');
    for (let i = 0; i < Math.min(3, m.length); i++) {
      const around = script.slice(Math.max(0, idx - 60), idx + 60);
      console.log('--- occurrence', i, '---');
      console.log(around);
      idx = script.indexOf('data-page-node-id', idx + 1);
    }
  }
}
// also: how many data-page-node-id total, and count within html body (outside script)
const total = (s.match(/data-page-node-id/g) || []).length;
console.log('total data-page-node-id:', total);
