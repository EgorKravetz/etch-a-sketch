const section = document.createElement('section');
document.body.append(section);

function multiDiv() {
  let x = prompt('Enter a number') // Later make multiDiv(x)
  let i = x * x;
  while(i > 0) {
    const divs = document.createElement('div');
    divs.className = 'divs';
    divs.style.cssText = `border: 1px solid green;
                          width: calc(100% / ${x});
                          height: calc(100% / ${x});`;
    section.append(divs);
    i--;
  }
}

multiDiv()

// 1) Create with js variable that have
// numeric value (or add to .divs data-attr)
// 2) Create a function that get data-attrib
// from .divs and modify it
// 3) Implement modified data-attr in CSS for 
// width: calc(100% / --data-attr)
// height: calc(100% / --data-attr)
