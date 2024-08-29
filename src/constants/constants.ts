import type { InjectionKey } from 'vue'

export const app = {
  title: 'Todo',
  validation: {
    inputTask: {
      length: {
        max: 150
      }
    }
  }
}

export const providerFunctionName = {
  applicationTitle: Symbol('Application Title') as InjectionKey<string>
}
