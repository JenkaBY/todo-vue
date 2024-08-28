import type { InjectionKey } from 'vue'

export const app = {
  title: 'Todo'
}

export const providerFunctionName = {
  applicationTitle: Symbol('Application Title') as InjectionKey<string>
}
