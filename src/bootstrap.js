import { store } from '@things-factory/shell'
import baseCode from './reducers/main'

export default function bootstrap() {
  store.addReducers({
    baseCode
  })
}
