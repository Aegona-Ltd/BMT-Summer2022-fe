using IdentityApp.Data;
using IdentityApp.DTOs;

namespace IdentityApp.IServices
{
    public interface IContactFormServices
    {
        /// <summary>
        /// Send Form Service
        /// </summary>
        Task<bool> SendFormService(ContactDto contact, ApplicationDbContext context);
    }
}
