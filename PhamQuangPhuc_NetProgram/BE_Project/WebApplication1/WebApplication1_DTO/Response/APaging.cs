using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace WebApplication1_DTO.Response
{
    public abstract class APaging
    {
        public int PageSize { get; set; } = 10;
        /// <summary>
        /// Page Index
        /// </summary>
        public int PageIndex { get; set; } = 1;

        public int NumberCount { get; set; }
    }
}
