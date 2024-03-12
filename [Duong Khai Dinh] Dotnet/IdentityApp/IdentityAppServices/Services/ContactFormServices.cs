
using IdentityApp.Data;
using IdentityApp.DTOs;
using IdentityApp.IServices;
using IdentityApp.Models;
using Microsoft.EntityFrameworkCore;

namespace IdentityApp.Services
{
    public class ContactFormServices : IContactFormServices
    {
        public  async Task<bool> SendFormService(ContactDto contact, ApplicationDbContext context)
        {
            var contactRecord = new Contact();  
            contactRecord.Company = contact.Company;
            contactRecord.Phone = contact.Phone;
            contactRecord.Email = contact.Email;
            contactRecord.Name = contact.Name;  
            contactRecord.Message= contact.Message;
            context.Add(contactRecord);
            await context.SaveChangesAsync();
            return true;
        }
    }
}
