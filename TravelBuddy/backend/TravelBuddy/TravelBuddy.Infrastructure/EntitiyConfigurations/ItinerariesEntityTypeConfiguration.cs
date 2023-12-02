namespace TravelBuddy.Infrastructure.EntitiyConfigurations
{
	internal class ItinerariesEntityTypeConfiguration : IEntityTypeConfiguration<Itinerary>
	{
		public void Configure(EntityTypeBuilder<Itinerary> builder)
		{
			builder
				.HasKey(x => x.Id);

		}
	}
}
