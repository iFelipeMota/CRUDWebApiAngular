
using WebApiAspAngular.Models;
using Microsoft.EntityFrameworkCore;
namespace WebApiAspAngular.EmployeeDB
{
    public class EmployeeDbContext : DbContext
    {
        public EmployeeDbContext(DbContextOptions<EmployeeDbContext> options) 
            : base(options){}
        public DbSet<Employee> Employees { get; set; }
    }
}