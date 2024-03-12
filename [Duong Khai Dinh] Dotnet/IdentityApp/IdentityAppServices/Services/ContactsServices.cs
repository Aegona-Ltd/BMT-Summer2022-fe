using IdentityApp.Data;
using IdentityAppServices.IServices;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityAppServices.Services
{
    public class ContactsServices :IContactsServices
    {
        private readonly ApplicationDbContext _context;
        public ContactsServices(ApplicationDbContext context) {
            _context = context;
        }
    }
}
