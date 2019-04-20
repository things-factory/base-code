export default function route(page) {
  switch (page) {
    case 'common_codes':
      import('./pages/common-code')
      return page
  }
}
