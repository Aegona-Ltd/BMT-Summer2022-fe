using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using WebApplication1_Entity.Entity;

namespace Database
{
    public class ApplicationDbContext : IdentityDbContext
    {
        #region DbSet
        public DbSet<UserDetail>? UserDetails { get; set; }
        public DbSet<UserExtension>? UserExtensions { get; set; }
        public DbSet<ContactUs>? ContactUs  { get; set; }
        #endregion

        #region Config DbContext
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options): base(options)
        {
        }

        public ApplicationDbContext()
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseMySQL("server=localhost;database=aegona_project;user=root;password=root");
            }
        }
                 #region description a way config

            //Nếu bạn muốn có khả năng tương thích với cả Dependency Injection(DI) thông qua DbContextOptions<ApplicationDbContext>
            //và cung cấp một chuỗi kết nối cứng cụ thể trong trường hợp không sử dụng DI,
            //bạn có thể sử dụng hàm tạo để thực hiện điều này.
            //Hàm tạo đầu tiên có tham số DbContextOptions<ApplicationDbContext> là để hỗ trợ Dependency Injection. 
            //Bạn sẽ chuyển chuỗi kết nối và các tùy chọn khác thông qua DI khi bạn sử dụng AddDbContext trong Startup.cs.

            //Hàm tạo thứ hai không có tham số là để hỗ trợ việc sử dụng cứng cụng trong trường hợp không sử dụng DI.
            //    Nó sẽ tự động cố gắng sử dụng chuỗi kết nối mặc định được cung cấp trong phương thức OnConfiguring, 
            //    nhưng nó chỉ thực hiện nếu optionsBuilder.IsConfigured là false.
        #endregion
        #endregion
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            #region Pluent Api
            // Configure one-to-one relationship between UserDetail and UserExtension
            modelBuilder.Entity<UserDetail>()
                .HasOne(d => d.User)
                .WithOne(e => e.UserDetail)
                .HasForeignKey<UserDetail>(d => d.UserId)
                .IsRequired(); // Optional, depending on your requirements

            base.OnModelCreating(modelBuilder);

            #endregion

          

        }
    }
}