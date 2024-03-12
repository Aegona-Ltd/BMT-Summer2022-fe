using System.ComponentModel.DataAnnotations;

namespace IdentityApp.DTOs
{
    public class ContactListDto
    {
        public int ContactId { get; set; }
        public string Name { get; set; }
        public string? Company { get; set; }
        public string Phone { get; set; }
        public string Email { get; set; }
        public string Message { get; set; }
    }

}
