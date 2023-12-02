namespace TravelBuddy.Infrastructure
{
	public class TravelBuddyDbContext : DbContext
	{
        public TravelBuddyDbContext(DbContextOptions<TravelBuddyDbContext> options) : base(options) {}

		public DbSet<User> Users { get; set; } = null!;

		public DbSet<Itinerary> Itineraries { get; set; } = null!;

		public DbSet<Trip> Trips { get; set; } = null!;

		public DbSet<Itinerary> Activities { get; set; } = null!;

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			//TODO: Aplly Configurtations

			base.OnModelCreating(modelBuilder);
		}
	}
}
