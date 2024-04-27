import { IGetCartUseCase,IaddToCartUseCase } from "../../domain/useCaseInterface.ts";
import { IDependencies } from "./IDependencies";

export interface IUseCases{
    addToCartUseCase:(dependencies:IDependencies)=>IaddToCartUseCase;
    getCart:(dependencies:IDependencies)=>IGetCartUseCase;
}