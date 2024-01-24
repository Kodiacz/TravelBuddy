namespace TravelBuddy.Infrastructure
{
	public class TravelBuddyDbContext : IdentityDbContext<ApplicationUser, IdentityRole<Guid>, Guid>
	{
        public TravelBuddyDbContext(DbContextOptions<TravelBuddyDbContext> options) : base(options) {}

		public DbSet<ApplicationUser> ApplicationUsers { get; set; } = null!;

		public DbSet<Itinerary> Itineraries { get; set; } = null!;

		public DbSet<Trip> Trips { get; set; } = null!;

		public DbSet<Itinerary> Activities { get; set; } = null!;

		protected override void OnModelCreating(ModelBuilder modelBuilder)
		{
			modelBuilder.ApplyConfiguration(new ActivityEntityTypeConfiguration());
			modelBuilder.ApplyConfiguration(new ItineraryEntityTypeConfiguration());
			modelBuilder.ApplyConfiguration(new ApplicationUserEntityTypeConfiguration());
			modelBuilder.ApplyConfiguration(new TripEntityTypeConfiguration());

			base.OnModelCreating(modelBuilder);
		}
	}
}
