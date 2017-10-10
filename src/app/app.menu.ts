export const mainMenus = [
  {icon: 'fa fa-home', text: 'HOME', url: './home'},
  {icon: 'fa fa-qrcode', text: 'WE-CHAT', url: 'http://bndy.net/images/wechat_qrcode.png'},
  {icon: 'img:http://bndy.net/favicon.ico', text: 'VISIT BNDY.NET', url: 'http://bndy.net'},
];

export const sideMenus = [
  {icon: 'fa fa-dashboard', text: 'Dashboard', url: './dashboard'},
  {
    icon: '', text: 'Example', url: '', expanded: true, children: [
      {icon: 'fa fa-id-card-o', text: 'Form', url: './example-form'},
      {icon: 'fa fa-list', text: 'List', url: './example-list'},
      {icon: 'fa fa-th-large', text: 'Grid', url: './example-grid'},
      {icon: 'fa fa-table', text: 'Smart Table', url: './example-table'},
      {icon: 'fa fa-table', text: 'Material Table', url: './example-md-table'},
      {icon: 'fa fa-code', text: 'Html Editor', url: './example-editor'},
      {icon: 'fa fa-tag', text: 'Article', url: './example-article'},
      {icon: 'fa fa-tag', text: 'Nested', url: './detail'},
    ],
  },
];
