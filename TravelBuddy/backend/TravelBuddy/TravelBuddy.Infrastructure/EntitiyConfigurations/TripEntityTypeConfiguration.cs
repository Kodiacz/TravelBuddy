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
				.Property(trip => trip.StartDate)
				.HasColumnType("Date")
				.IsRequired();

			builder
				.HasCheckConstraint("CK_Trip_NewStartDate", $"{nameof(Trip.StartDate)} >= GETDATE()");

			builder
				.Property(trip => trip.EndDate)
				.HasColumnType("Date")
				.IsRequired();

			builder
				.HasCheckConstraint("CK_Trip_EndDate", $"{nameof(Trip.EndDate)} > StartDate");

			builder
				.Property(trip => trip.TravellingBy)
				.HasMaxLength(TRIP_TRAVELLING_BY_MAX_LENGTH);

			builder
				.Property(trip => trip.Accommodation);

			// Relationships:

			builder
				.HasOne(trip => trip.Creator)
				.WithMany(user => user.CreatedTrips)
				.HasForeignKey(trip => trip.CreatorId)
				.OnDelete(DeleteBehavior.NoAction);

			builder
				.HasMany(trip => trip.Guests)
				.WithMany(user => user.InvitedToTrips);

			builder
				.HasMany(trip => trip.Itineraries)
				.WithOne(itinerary => itinerary.Trip)
				.HasForeignKey(itinerary => itinerary.TripId);

			builder
				.Property(trip => trip.DateDeleted)
				.HasColumnType("Date")
				.IsRequired(false);
		}
	}
}
