addEventListener("message",({data:t})=>{let M=(l,o,e,n,r,c,h)=>{for(let i of o){let w=i.scaleFactor*t.charMap[i.text[0]].length,u=n;for(let s of i.text)if(!(t.loadPr<(c+=1)/r)){for(let p=0;p<t.charMap[s][0].length;p++)for(let _=0;_<i.scaleFactor;_++)for(let g=0;g<t.charMap[s].length;g++)for(let F=0;F<i.scaleFactor;F++)l[p*i.scaleFactor+e+_][g*i.scaleFactor+u+F]=h?0:t.charMap[s][p][g];u+=t.charMap[s][0].length*i.scaleFactor," "!=s&&":"!=s&&"/"!=s&&"."!=s&&(u+=2)}e+=w}return c},f=[];if(null==t.grid)for(let l=0;l<t.gridHeight;l++){let o=[];for(let e=0;e<t.gridWidth;e++)o.push(0);f.push(o)}else f=t.grid;if(t.gameon)f=(l=>{let o=JSON.parse(JSON.stringify(l));for(let e=1;e<t.gridHeight-1;e++)for(let n=1;n<t.gridWidth-1;n++){let r=0;for(let c=-1;c<=1;c++)for(let h=-1;h<=1;h++)r+=l[e+c][n+h];r-=l[e][n],o[e][n]=1==l[e][n]&&r<2||1==l[e][n]&&r>3?0:0==l[e][n]&&3==r?1:l[e][n]}return o})(f);else{let l=0;for(let e in t.content){let n=t.content[e].lines;t.content[e].rotate&&(n=n[0]);for(let r of n)l+="logo"==r.type?1:r.text.length}let o=0;for(let e in t.content){let n=t.content[e].padding_top,r=t.content[e].padding_left,c=t.content[e].lines;t.content[e].rotate&&(null!=t.content[e].updated?t.content[e].updated+t.content[e].timeout<=Date.now()&&(M(f,c[t.content[e].curr],n,r,l,o,!0),t.content[e].curr=(t.content[e].curr+1)%t.content[e].lines.length,t.content[e].updated=Date.now()):t.content[e].updated=Date.now(),c=t.content[e].lines[t.content[e].curr]),o=M(f,c,n,r,l,o,!1)}}postMessage({grid:f,content:t.content})});