﻿namespace TravelBuddy.Infrastructure.EntitiyConfigurations
{
	internal class ActivityEntityTypeConfiguration : IEntityTypeConfiguration<Activity>
	{
		public void Configure(EntityTypeBuilder<Activity> builder)
		{
			builder
				.HasKey(x => x.Id);

			builder
				.HasOne(x => x.Itinerary)
				.WithMany(x => x.Activities)
				.HasForeignKey(x => x.ItineraryId);

			builder
				.Property(x => x.Name)
				.IsRequired()
				.HasMaxLength(ACTIVITY_NAME_MAX_LENGTH);

			builder
				.Property(x => x.ItineraryId)
				.IsRequired();

			// Relationships:

			builder
				.HasOne(activity => activity.Itinerary)
				.WithMany(itinerary => itinerary.Activities)
				.HasForeignKey(activity => activity.ItineraryId);
		}
	}
}
