using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1_Entity.Entity
{
    public abstract class BaseEntity
    {
        public Guid Id { get; set; }

        public string CreatedBy { get; set; } = string.Empty;

        public DateTime CreatedDate { get; set; }
        public bool IsActive { get; set; }
        public string LastUpdateBy { get; set; } = string.Empty;

        public DateTime LastUpdateDate { get; set; }
    }
}
