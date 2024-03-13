using IdentityApp.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace IdentityApp.Data
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            /*this.SeedRoles(builder);*/
            //this.SeedUsers(builder);
            //this.SeedUserRoles(builder);
        }
        //private void AddRole(ModelBuilder builder)
        //{

        //}
        /*  private void SeedRoles(ModelBuilder builder)
          {
              builder.Entity<IdentityRole>().HasData(
                  new IdentityRole() { Id = "fab4fac1-c546-41de-aebc-a14da6895711", Name = "Administrator", ConcurrencyStamp = "1", NormalizedName = "Administrator" },
                  new IdentityRole() { Id = "0f8fad5b-d9cb-469f-a165-70867728950e", Name = "Moderator", ConcurrencyStamp = "2", NormalizedName = "Moderator" }
                  new IdentityRole() { Id = "c7b013f0-5201-4317-abd8-c211f91b7330", Name = "User", ConcurrencyStamp = "3", NormalizedName = "User" }
                  );
          }*/
        //private void SeedUsers(ModelBuilder builder)
        //{
        //    IdentityUser user = new IdentityUser()
        //    {
        //        Id = "b74ddd14-6340-4840-95c2-db12554843e5",
        //        UserName = "admin@gmail.com",
        //        Email = "admin@gmail.com",
        //        LockoutEnabled = false,
        //        PhoneNumber = "1234567890"
        //    };

        //    PasswordHasher<IdentityUser> passwordHasher = new PasswordHasher<IdentityUser>();
        //    passwordHasher.HashPassword(user, "P@ssw0rd");

        //    builder.Entity<IdentityUser>().HasData(user);
        //}
        //private void SeedUserRoles(ModelBuilder builder)
        //{
        //    builder.Entity<IdentityUserRole<string>>().HasData(
        //        new IdentityUserRole<string>() { RoleId = "fab4fac1-c546-41de-aebc-a14da6895711", UserId = "b74ddd14-6340-4840-95c2-db12554843e5" }
        //        );
        //}
        public DbSet<Contact> Contacts { get; set; }
        public DbSet<Company> Companies { get; set; }
        
    }
}