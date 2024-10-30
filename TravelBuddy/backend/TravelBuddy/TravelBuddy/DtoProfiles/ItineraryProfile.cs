namespace TravelBuddy.API.DtoProfiles
{
	public class ItineraryProfile : Profile
	{
        public ItineraryProfile()
        {
            CreateMap<Itinerary, GetItineraryDto>()
                .ForMember(dest => dest.Trip, opt => opt.MapFrom(src => src.Trip))
                .ForMember(dest => dest.Activities, opt => opt.MapFrom(src => src.Activities));

            CreateMap<AddItineraryDto, Itinerary>();
        }
    }
}
