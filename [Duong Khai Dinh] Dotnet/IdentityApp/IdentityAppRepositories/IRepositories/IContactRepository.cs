using IdentityApp.Models;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityAppRepositories.IRepositories
{
    public interface IContactRepository : IRepositories<Contact>
    {
      /*  Task <IEnumerable<Contact>> GetContacts();
        Task <Contact?> GetContactByID(int? contactId);
        Task InsertContact(Contact contact);
        Task DeleteContact(int contactID);
        Task UpdateContact(Contact contact);*/
    }
}
