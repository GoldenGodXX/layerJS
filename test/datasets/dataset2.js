var dataset = [{
    id: 's1',
    type: 'stage',
    children: ['l3', 'l2', 'l1']
  }, {
    id: 'l1',
    type: 'layer',
    children: ['f1']
  }, {
    id: 'l2',
    type: 'layer',
    children: ['f2', 'f3']
  }, {
    id: 'l3',
    type: 'layer',
    children: ['f4'],
    nativeScroll: false
  }, {
    id: 'f1',
    type: 'frame',
    name: 'f1',
    fitTo: 'responsive-width',
    children: ['n1']
  }, {
    id: 'f2',
    type: 'frame',
    name: 'f2',
    width: '1440px',
    height: '2500px',
    children: ['c1']
  }, {
    id: 'f3',
    type: 'frame',
    name: 'f3',
    width: '1440px',
    height: '2500px',
    children: ['c1']
  }, {
    id: 'f4',
    type: 'frame',
    name: 'f4',
    children: ['i1'],
    width: '1380px',
    height: '920px',
    fitTo: 'cover',
    startPosition: 'center'
  }, {
    id: 'i1',
    type: 'image',
    src: 'negativespace-151-690x460.2x.jpg',
    width: '1380px',
    height: '920px'
  }, {
    id: 'n1',
    type: 'text',
    content: 'Hallo',
    style: 'width:100%;height:50px;background-color:rgba(255,255,255,0.6);line-height:50px;padding-left:50px;'
  }, {
    id: 'c1',
    content: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.   \
\
Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.   \
\
Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.   \
\
Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer',
    type: 'text',
    style: 'max-width:800px;padding:50px;'
  }


]