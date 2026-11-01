"""Generate self-contained original SVG illustrations for the 18 catalog plants."""
import math, random, os
from xml.sax.saxutils import escape
OUT = os.path.join(os.path.dirname(__file__), 'public', 'images')
COLORS = [('#32674a','#7eac70','#b8cf8d'),('#2e6550','#6b9c66','#a7c88c'),('#2f6245','#66946c','#bdd58e'),('#446c4d','#89ae76','#bdd28e'),('#305f50','#82a77a','#d4dba2'),('#315b48','#7d9e6b','#b1cb8c')]
PLANTS = [
('snake-plant','spear',15,0),('pothos','trailing',19,1),('zz-plant','small',24,2),('jade-plant','round',25,3),('aloe-vera','spiky',16,4),('peperomia','round',22,5),
('monstera','monstera',12,0),('fiddle-leaf','broad',13,1),('bird-of-paradise','long',12,2),('rubber-plant','broad',14,3),('philodendron','trailing',22,4),('calathea','striped',15,5),
('peace-lily','flower',17,0),('spider-plant','grass',32,1),('boston-fern','fern',40,2),('areca-palm','palm',31,3),('chinese-evergreen','striped',19,4),('dracaena','spiky',27,5)]

def leaf(sx,sy,ex,ey,w,fill,vein='#a9c88e',holes=False,stripes=False):
    dx=ex-sx; dy=ey-sy; l=math.hypot(dx,dy); nx=-dy/l; ny=dx/l
    mx=sx+dx*.55; my=sy+dy*.55
    ax=mx+nx*w; ay=my+ny*w; bx=mx-nx*w; by=my-ny*w
    p=f'M {sx:.1f} {sy:.1f} Q {ax:.1f} {ay:.1f} {ex:.1f} {ey:.1f} Q {bx:.1f} {by:.1f} {sx:.1f} {sy:.1f} Z'
    parts=[f'<path d="{p}" fill="{fill}" stroke="#315f43" stroke-opacity=".12" stroke-width="1.4"/>']
    parts.append(f'<path d="M {sx:.1f} {sy:.1f} Q {mx:.1f} {my:.1f} {ex:.1f} {ey:.1f}" fill="none" stroke="{vein}" stroke-opacity=".58" stroke-width="2.1"/>')
    if stripes:
        for f in (.45,.61,.76):
            px=sx+dx*f; py=sy+dy*f
            parts.append(f'<path d="M {px+nx*w*.48:.1f} {py+ny*w*.48:.1f} L {px-nx*w*.48:.1f} {py-ny*w*.48:.1f}" stroke="#c6d7a1" stroke-width="3.4" stroke-opacity=".65"/>')
    if holes:
        for f in (.55,.72):
            px=sx+dx*f; py=sy+dy*f
            parts.append(f'<ellipse cx="{px+nx*w*.34:.1f}" cy="{py+ny*w*.34:.1f}" rx="4" ry="9" transform="rotate({math.degrees(math.atan2(dy,dx))+90:.1f} {px+nx*w*.34:.1f} {py+ny*w*.34:.1f})" fill="#ecf1e7" opacity=".95"/>')
    return ''.join(parts)

def create(name,kind,count,color_idx):
    rng=random.Random(178+sum(map(ord,name)))
    dark,med,light=COLORS[color_idx]
    # plant base and planter
    base_y=313 if kind not in ('palm','bird-of-paradise') else 330
    cx=220
    layers=[]
    layers.append('<ellipse cx="220" cy="403" rx="98" ry="13" fill="#254a34" opacity=".09"/>')
    # stems first
    specs=[]
    for i in range(count):
        if kind in ('spear','spiky','grass'):
            angle=rng.uniform(-1.15,1.15)
            length=rng.uniform(105,220) if kind!='grass' else rng.uniform(115,200)
            x=cx+math.sin(angle)*length*.74+rng.uniform(-10,10)
            y=base_y-math.cos(angle)*length
            w=rng.uniform(8,15) if kind=='spear' else rng.uniform(11,19) if kind=='spiky' else rng.uniform(3,6)
        elif kind=='fern':
            angle=rng.uniform(-1.45,1.45); length=rng.uniform(100,210)
            x=cx+math.sin(angle)*length*.95;y=base_y-math.cos(angle)*length*.65;w=rng.uniform(8,12)
        elif kind=='palm':
            angle=rng.uniform(-1.25,1.25); length=rng.uniform(135,230)
            x=cx+math.sin(angle)*length;y=base_y-math.cos(angle)*length*.85;w=rng.uniform(10,18)
        elif kind=='trailing':
            angle=rng.uniform(-1.7,1.7);length=rng.uniform(95,205)
            x=cx+math.sin(angle)*length;y=base_y-math.cos(angle)*length*.7
            if i%5==0: y=base_y+40+rng.uniform(0,32);x=cx+rng.choice([-1,1])*rng.uniform(90,160)
            w=rng.uniform(18,31)
        else:
            angle=rng.uniform(-1.35,1.35);length=rng.uniform(100,225)
            x=cx+math.sin(angle)*length*.9;y=base_y-math.cos(angle)*length
            w=rng.uniform(18,32) if kind in ('small','round') else rng.uniform(26,44)
        specs.append((x,y,w))
        layers.append(f'<path d="M {cx+rng.uniform(-18,18):.1f} {base_y+5} Q {cx+rng.uniform(-30,30):.1f} {base_y-length*.3:.1f} {x:.1f} {y:.1f}" stroke="{dark}" stroke-width="{rng.uniform(2.2,5):.1f}" stroke-linecap="round" fill="none"/>')
    for i,(x,y,w) in enumerate(specs):
        fill=[dark,med,light,med,med][i%5]
        if kind=='spear':
            layers.append(leaf(cx+rng.uniform(-14,14),base_y+4,x,y,w*.68,fill,light))
            if i%3==0: layers.append(f'<path d="M {cx:.1f} {base_y} L {x:.1f} {y:.1f}" stroke="#c4d291" stroke-width="2" opacity=".65"/>')
        elif kind in ('spiky','grass'):
            layers.append(leaf(cx+rng.uniform(-10,10),base_y+5,x,y,w,fill,light))
        elif kind=='fern':
            sx=cx+rng.uniform(-10,10);sy=base_y
            for j in range(2,9):
                f=j/10; px=sx+(x-sx)*f;py=sy+(y-sy)*f
                spread=(1-f)*27
                layers.append(leaf(px,py,px-spread,py-16,6,fill,light))
                layers.append(leaf(px,py,px+spread,py-17,6,med,light))
        elif kind=='palm':
            sx=cx;sy=base_y
            for j in range(2,10):
                f=j/11; px=sx+(x-sx)*f;py=sy+(y-sy)*f
                spread=(1-f)*36
                layers.append(leaf(px,py,px-spread,py-28,5,fill,light))
                layers.append(leaf(px,py,px+spread,py-26,5,med,light))
        elif kind=='flower' and i in (2,8,13):
            layers.append(leaf(cx,base_y,x,y,w*.7,med,light))
            layers.append(leaf(x-3,y+12,x+5,y-29,13,'#f8f8e8','#cfd7ac'))
            layers.append(f'<path d="M {x+3:.1f} {y+7:.1f} L {x+5:.1f} {y-18:.1f}" stroke="#d4b565" stroke-width="4" stroke-linecap="round"/>')
        else:
            layers.append(leaf(cx+rng.uniform(-20,20),base_y,x,y,w,fill,light,holes=(kind=='monstera'),stripes=(kind=='striped')))
    # planter with curved rim, front shadow and texture
    pot_color=['#b87e64','#d5a789','#c7b49b','#a87764','#c6a98b','#9caaa0'][color_idx]
    pot_shadow=['#925c47','#b27f66','#a3927b','#875845','#9f866c','#7b9188'][color_idx]
    layers.append(f'<path d="M 155 {base_y} L 170 392 Q 220 413 270 392 L 285 {base_y} Z" fill="{pot_color}"/>')
    layers.append(f'<path d="M 255 {base_y+12} L 266 389 Q 271 388 270 392 Q 220 413 170 392 L 167 378 Q 213 400 255 380 Z" fill="{pot_shadow}" opacity=".28"/>')
    layers.append(f'<ellipse cx="220" cy="{base_y}" rx="69" ry="16" fill="{pot_shadow}"/>')
    layers.append(f'<ellipse cx="220" cy="{base_y-3}" rx="69" ry="13" fill="{pot_color}"/>')
    layers.append(f'<ellipse cx="220" cy="{base_y-3}" rx="59" ry="9" fill="#554b37" opacity=".32"/>')
    layers.append(f'<path d="M 152 {base_y-2} Q 220 {base_y+18} 288 {base_y-2} L 285 {base_y+13} Q 220 {base_y+34} 155 {base_y+13} Z" fill="{pot_color}"/>')
    layers.append(f'<path d="M 174 {base_y+28} L 183 383" stroke="#f3d4b5" stroke-width="8" stroke-linecap="round" opacity=".16"/>')
    # leaf stems should appear from pot mouth; pot is foreground
    svg=f'''<svg xmlns="http://www.w3.org/2000/svg" width="440" height="440" viewBox="0 0 440 440" role="img" aria-label="{escape(name.replace('-', ' '))} plant illustration">
<defs><filter id="soft"><feGaussianBlur stdDeviation="2"/></filter></defs>
{''.join(layers)}
</svg>'''
    with open(os.path.join(OUT,name+'.svg'),'w') as f: f.write(svg)

for row in PLANTS: create(*row)
print('Generated',len(PLANTS),'local plant illustrations')
