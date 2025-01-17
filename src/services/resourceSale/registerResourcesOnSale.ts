import { QueryFailedError } from 'typeorm';

import { ResourceSale } from '../../entities';
import {
  IResourceRequest,
  IResourceSale,
  ResourceSaleRepository,
} from '../../repositories';

import { ErrorHandler } from '../../utils';

class RegisterResourcesOnSale {
  async execute(requestData: IResourceRequest[], id_sale: string) {
    try {
      const resourceSaleRepository = new ResourceSaleRepository();

      const resourceSaleList: IResourceSale[] = requestData.map((item) => {
        const resourceSaleData: IResourceSale = {
          id_sale, // pegar id_sale após ter a criado com o service no controller
          id_resource: 'ssss', // pegar recursos pelo nome que será uma chave unica
          quantity: item.quantity,
        };
        return resourceSaleData;
      });

      resourceSaleList.forEach(async (item) => {
        const newSale: ResourceSale = resourceSaleRepository.createSale(item);
        await resourceSaleRepository.saveSale(newSale);
      });
    } catch (error) {
      const { detail } = error;

      if (error instanceof QueryFailedError) {
        throw new ErrorHandler(400, `QueryFailedError:\n${detail}`);
      }

      throw new ErrorHandler(400, detail);
    }
  }
}

export default RegisterResourcesOnSale;
