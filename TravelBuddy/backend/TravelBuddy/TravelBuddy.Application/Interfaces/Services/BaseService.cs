namespace TravelBuddy.Application.Interfaces.Services
{
	public abstract class BaseService
	{
		private readonly IUnitOfWork unitOfWork;
		private readonly IMapper mapper;

		public BaseService(IUnitOfWork unitOfWork, IMapper mapper)
		{
			this.unitOfWork = unitOfWork;
			this.mapper = mapper;
		}

		public IUnitOfWork UnitOfWork => this.unitOfWork;

		public IMapper Mapper => this.mapper;
	}
}
