namespace TravelBuddy.Infrastructure.EntitiyConfigurations
{
	internal class ItineraryEntityTypeConfiguration : IEntityTypeConfiguration<Itinerary>
	{
		public void Configure(EntityTypeBuilder<Itinerary> builder)
		{
			builder
				.HasKey(x => x.Id);

			builder
				.Property(x => x.Name)
				.IsRequired()
				.HasMaxLength(ITINERARY_NAME_MAX_LENGTH);

			builder
				.Property(x => x.Date)
				.IsRequired();

			builder
				.Property(x => x.TripId) 
				.IsRequired();

			builder
				.HasCheckConstraint("CK_Itinerary_Date", $"{nameof(Itinerary.Date)} > {DateTime.UtcNow}");

			// Relationships:

			builder
				.HasMany(itinerary => itinerary.Activities)
				.WithOne(activity => activity.Itinerary)
				.HasForeignKey(activity => activity.ItineraryId);

			builder
				.HasOne(itinerary => itinerary.Trip)
				.WithMany(trip => trip.Itineraries)
				.HasForeignKey(itinerary => itinerary.TripId);
		}
	}
}
