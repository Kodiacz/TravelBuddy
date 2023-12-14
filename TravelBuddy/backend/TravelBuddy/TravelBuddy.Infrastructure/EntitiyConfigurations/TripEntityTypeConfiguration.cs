﻿namespace TravelBuddy.Infrastructure.EntitiyConfigurations
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
				.HasCheckConstraint("CK_Itinerary_Date", $"{nameof(Trip.Date)} >= {DateTime.UtcNow}");

			// Relationships:

			builder
				.HasOne(trip => trip.Creator)
				.WithMany(user => user.CreatedTrips)
				.HasForeignKey(trip => trip.CreatorId);

			builder
				.HasMany(trip => trip.Guests)
				.WithMany(user => user.InvitedToTrips);

			builder
				.HasMany(trip => trip.Itineraries)
				.WithOne(itinerary => itinerary.Trip)
				.HasForeignKey(itinerary => itinerary.TripId);
		}
	}
}
