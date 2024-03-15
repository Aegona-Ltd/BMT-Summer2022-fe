using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityApp.Models;
namespace IdentityAppServices.IServices
{
    public interface ICompaniesServices
    {
        Company GetByID(object id);
        IQueryable<Company> Get();
        void Insert(Company entity);
        void Delete(object id);
        void Delete(Company entityToDelete);
        void Update(Company entityToUpdate);
    }
}
