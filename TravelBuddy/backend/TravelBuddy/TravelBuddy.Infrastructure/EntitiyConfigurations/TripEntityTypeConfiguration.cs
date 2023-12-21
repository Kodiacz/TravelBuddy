namespace TravelBuddy.Infrastructure.EntitiyConfigurations
{
	internal class TripEntityTypeConfiguration : IEntityTypeConfiguration<Trip>
	{
		public void Configure(EntityTypeBuilder<Trip> builder)
		{
			builder
				.HasKey(trip => trip.Id);

			builder
				.Property(trip => trip.Name)
				.IsRequired()
				.HasMaxLength(TRIP_NAME_MAX_LENGTH);

			builder
				.Property(trip => trip.Date)
				.IsRequired();

			builder
				.HasCheckConstraint("CK_Trip_Date", $"{nameof(Trip.Date)} >= GETDATE()");

			// Relationships:

			builder
				.HasOne(trip => trip.Creator)
				.WithMany(user => user.CreatedTrips)
				.HasForeignKey(trip => trip.CreatorId)
				.OnDelete(DeleteBehavior.NoAction);

			builder
				.HasMany(trip => trip.Guests)
				.WithMany(user => user.InvitedToTrips)
				.UsingEntity(j => j.ToTable("TripUser"));

			builder
				.HasMany(trip => trip.Itineraries)
				.WithOne(itinerary => itinerary.Trip)
				.HasForeignKey(itinerary => itinerary.TripId);
		}
	}
}
