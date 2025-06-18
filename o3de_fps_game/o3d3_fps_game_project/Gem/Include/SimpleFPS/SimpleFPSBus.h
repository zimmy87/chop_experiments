
#pragma once

#include <SimpleFPS/SimpleFPSTypeIds.h>

#include <AzCore/EBus/EBus.h>
#include <AzCore/Interface/Interface.h>

namespace SimpleFPS
{
    class SimpleFPSRequests
    {
    public:
        AZ_RTTI(SimpleFPSRequests, SimpleFPSRequestsTypeId);
        virtual ~SimpleFPSRequests() = default;
        // Put your public methods here
    };

    class SimpleFPSBusTraits
        : public AZ::EBusTraits
    {
    public:
        //////////////////////////////////////////////////////////////////////////
        // EBusTraits overrides
        static constexpr AZ::EBusHandlerPolicy HandlerPolicy = AZ::EBusHandlerPolicy::Single;
        static constexpr AZ::EBusAddressPolicy AddressPolicy = AZ::EBusAddressPolicy::Single;
        //////////////////////////////////////////////////////////////////////////
    };

    using SimpleFPSRequestBus = AZ::EBus<SimpleFPSRequests, SimpleFPSBusTraits>;
    using SimpleFPSInterface = AZ::Interface<SimpleFPSRequests>;

} // namespace SimpleFPS
