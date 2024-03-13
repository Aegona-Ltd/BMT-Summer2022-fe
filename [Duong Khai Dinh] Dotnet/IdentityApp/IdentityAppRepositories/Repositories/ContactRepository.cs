using IdentityApp.Data;
using IdentityApp.Models;
using IdentityAppRepositories.IRepositories;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace IdentityAppRepositories.Repositories
{
    public class ContactRepository : GenericRepository<Contact>, IContactRepository
    {
        public ContactRepository(ApplicationDbContext context) : base(context)
        {
          
        }
        //    public ContactRepository(SCDataContext context) : base(context)
        //    {
        //    }
        //    /* private bool disposedValue;
        //     private readonly ApplicationDbContext _context;
        //     public ContactRepository(ApplicationDbContext context)
        //     {
        //         _context = context;
        //     }
        //     async Task IContactRepository.DeleteContact(int contactID)
        //     {
        //         var contact = await _context.Contacts.FindAsync(contactID);
        //         if (contact != null)
        //         {
        //             _context.Contacts.Remove(contact);
        //         }

        //         await _context.SaveChangesAsync();
        //     }

        //     async Task <Contact> IContactRepository.GetContactByID(int? contactId)
        //     {
        //         var contact = await _context.Contacts.FirstOrDefaultAsync(m => m.ContactId == contactId);
        //         return contact;
        //     }

        //     async Task <IEnumerable<Contact>> IContactRepository.GetContacts()
        //     {
        //         return await _context.Contacts.ToListAsync();
        //     }

        //     async Task IContactRepository.InsertContact(Contact contact)
        //     {
        //         _context.Add(contact);
        //         await _context.SaveChangesAsync();
        //     }

        //     async Task IContactRepository.UpdateContact(Contact contact)
        //     {
        //          _context.Update(contact);
        //         await _context.SaveChangesAsync();
        //     }

        //     protected virtual void Dispose(bool disposing)
        //     {
        //         if (!disposedValue)
        //         {
        //             if (disposing)
        //             {
        //                 _context.Dispose();
        //             }

        //             // TODO: free unmanaged resources (unmanaged objects) and override finalizer
        //             // TODO: set large fields to null
        //             disposedValue = true;
        //         }
        //     }

        //     // // TODO: override finalizer only if 'Dispose(bool disposing)' has code to free unmanaged resources
        //     // ~ContactRepository()
        //     // {
        //     //     // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //     //     Dispose(disposing: false);
        //     // }

        //     void IDisposable.Dispose()
        //     {
        //         // Do not change this code. Put cleanup code in 'Dispose(bool disposing)' method
        //         Dispose(disposing: true);
        //         GC.SuppressFinalize(this);
        //     }*/
    }
}
