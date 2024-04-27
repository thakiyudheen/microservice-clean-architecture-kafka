import * as useCases from '../application/useCases'
import * as repositories from  '../infrastructure/database/mongoDB/repositories'
import { IDependencies } from '../application/interfaces/IDependencies'

export const dependencies:IDependencies={
       repositories,
       useCases
}