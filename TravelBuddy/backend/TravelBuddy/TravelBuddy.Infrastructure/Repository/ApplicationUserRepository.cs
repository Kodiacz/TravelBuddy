
namespace TravelBuddy.Infrastructure.Repository
{
	public sealed class ApplicationUserRepository : IApplicationUserRepository
	{
		private readonly TravelBuddyDbContext dbContext;

		public ApplicationUserRepository(TravelBuddyDbContext dbContext)
		{
			this.dbContext = dbContext;
		}

		public async Task AddAsync(ApplicationUser user)
		{
			await this.dbContext.AddAsync(user);
		}

		public async Task<ICollection<ApplicationUser>> GetAllAsReadOnlyAsync()
		{
			return await this.dbContext
				.ApplicationUsers
				.AsNoTracking()
				.Include(user => user.InvitedToTrips)
				.Include(user => user.CreatedTrips)
				.Where(user => !user.Deleted)
				.ToListAsync();
		}

		public async Task<ICollection<ApplicationUser>> GetAllAsReadOnlyAsync(Expression<Func<ApplicationUser, bool>> search)
		{
			return await this.dbContext
				.ApplicationUsers
				.AsNoTracking()
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.Where(user => !user.Deleted)
				.Where(search)
				.ToListAsync();
		}

		public async Task<ICollection<ApplicationUser>> GetAllAsync()
		{
			return await this.dbContext
				.ApplicationUsers
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.Where(user => !user.Deleted)
				.ToListAsync();
		}

		public async Task<ICollection<ApplicationUser>> GetAllAsync(Expression<Func<ApplicationUser, bool>> search)
		{
			return await this.dbContext
				.ApplicationUsers
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.Where(user => !user.Deleted)
				.Where(search)
				.ToListAsync();
		}

		public async Task<ApplicationUser> GetByEmailAsReadOnlyAsync(string email)
		{
			var user = await this.dbContext
				.ApplicationUsers
				.AsNoTracking()
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.FirstOrDefaultAsync(user => user.Email == email && !user.Deleted);

			return user!;
		}

		public async Task<ApplicationUser> GetByEmailAsync(string email)
		{
			var user = await this.dbContext
				.ApplicationUsers
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.FirstOrDefaultAsync(user => user.Email == email && !user.Deleted);

			return user!;
		}

		public async Task<ApplicationUser> GetByIdAsReadonlyAsync(Guid id)
		{
			var user = await this.dbContext
				.ApplicationUsers
				.AsNoTracking()
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.FirstOrDefaultAsync(user => user.Id == id && !user.Deleted);

			return user!;
		}

		public async Task<ApplicationUser> GetByIdAsReadonlyAsync(Expression<Func<ApplicationUser, bool>> search)
		{
			var user = await this.dbContext
				.ApplicationUsers
				.AsNoTracking()
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.Where(user => !user.Deleted)
				.FirstOrDefaultAsync(search);

			return user!;
		}

		public async Task<ApplicationUser> GetByIdAsync(Guid id)
		{
			var user = await this.dbContext
				.ApplicationUsers
				.AsNoTracking()
				.Include(user => user.CreatedTrips)
				.Include(user => user.InvitedToTrips)
				.FirstOrDefaultAsync(user => user.Id == id && !user.Deleted);

			return user!;
		}

		public async Task SaveAsync()
		{
			await this.dbContext.SaveChangesAsync();
		}

		public void Update(ApplicationUser user)
		{
			this.dbContext.Update(user);
		}
	}
}
