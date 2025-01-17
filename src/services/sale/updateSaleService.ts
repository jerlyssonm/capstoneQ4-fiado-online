import { Sale } from '../../entities';
import { SaleRepository } from '../../repositories';

class UpdateSaleService {
  async execute(id_sale: string) {
    const saleRepository = new SaleRepository();

    const saleToupdate: Sale = await saleRepository.getOneSale(id_sale);

    saleToupdate.closed = true;

    return saleToupdate;
  }
}
export default UpdateSaleService;
