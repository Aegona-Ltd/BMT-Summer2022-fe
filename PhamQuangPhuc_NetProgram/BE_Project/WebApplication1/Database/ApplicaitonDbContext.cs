using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using WebApplication1_Entity.Entity;

namespace Database
{
    public class ApplicationDbContext : IdentityDbContext
    {
        public DbSet<UserDetail>? UserDetails { get; set; }
        public DbSet<UserExtension>? UserExtensions { get; set; }
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        //protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        //{
        //    optionsBuilder.UseMySQL("server=localhost;database=aegona_project;user=root;password=root");
        //}

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

            //#region Modified Table
            //modelBuilder.HasDefaultSchema("tbl");
            //modelBuilder.Entity<IdentityUser>(
            //    entity =>
            //    {
            //        entity.ToTable(name: "user");
            //    });
            //modelBuilder.Entity<IdentityRole>(
            //    entity => { entity.ToTable(name: "role"); });

            //modelBuilder.Entity<IdentityUserRole<string>>(
            //    entity =>
            //    {
            //        entity.ToTable(name: "user_roles");
            //    });
            //modelBuilder.Entity<IdentityUserClaim<string>>(
            //     entity =>
            //     {
            //         entity.ToTable(name: "user_claims");
            //     });

            //modelBuilder.Entity<IdentityUserLogin<string>>(
            //   entity =>
            //   {
            //       entity.ToTable(name: "user_logins");
            //   });
            //modelBuilder.Entity<IdentityRoleClaim<string>>(
            //    entity =>
            //    {
            //        entity.ToTable(name: "role_claims");
            //    });
            //modelBuilder.Entity<IdentityUserToken<string>>(
            //   entity =>
            //   {
            //       entity.ToTable(name: "user_tokens");
            //   });
            //#endregion

        }
    }
}