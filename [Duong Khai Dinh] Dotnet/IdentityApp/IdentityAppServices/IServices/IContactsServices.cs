using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityApp.Models;
namespace IdentityAppServices.IServices
{
    public interface IContactsServices
    {
         Contact GetByID(object id);
         IQueryable<Contact> Get();
        void Insert(Contact entity);
        void Delete(object id);
        void Delete(Contact entityToDelete);
        void Update(Contact entityToUpdate);
    }
}
