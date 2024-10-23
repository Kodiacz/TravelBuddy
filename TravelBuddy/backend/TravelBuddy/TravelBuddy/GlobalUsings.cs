global using System.Net;
global using System.Text;
global using System.Reflection;
global using System.Threading.Tasks;
global using System.ComponentModel.DataAnnotations;

global using Microsoft.EntityFrameworkCore;
global using Microsoft.IdentityModel.Tokens;
global using Microsoft.AspNetCore.Mvc;
global using Microsoft.AspNetCore.Cors;
global using Microsoft.AspNetCore.Mvc.Filters;
global using Microsoft.AspNetCore.Authorization;
global using Microsoft.AspNetCore.Authentication;
global using Microsoft.AspNetCore.Authentication.JwtBearer;

global using Azure.Storage.Blobs;

global using AutoMapper;

global using TravelBuddy.Domain.Entities;
global using TravelBuddy.Infrastructure;
global using TravelBuddy.Infrastructure.Repository;
global using TravelBuddy.Infrastructure.Services;
global using TravelBuddy.API.Filters;
global using TravelBuddy.API.Controllers;
global using TravelBuddy.API.CustomAttributes;
global using TravelBuddy.API.Extenstions.Filters;
global using TravelBuddy.API.Extenstions.BuilderServices;
global using TravelBuddy.Application.Interfaces;
global using TravelBuddy.Application.CustomAttributes;
global using TravelBuddy.Application.Exceptions;
global using TravelBuddy.Application.Interfaces.Services;
global using TravelBuddy.Application.Interfaces.Repository;
global using TravelBuddy.Application.Dtos.TripDtos;
global using TravelBuddy.Application.Dtos.ActivityDtos;
global using TravelBuddy.Application.Dtos.ItineraryDtos;
global using TravelBuddy.Application.Dtos.ApplicationUserDto;