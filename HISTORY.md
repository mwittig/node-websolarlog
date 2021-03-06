# Release History

* 20150417, V0.0.1
    * Initial Version

* 20150512, V0.0.2
    * Added support for HTTPS, added rejectUnauthorized: false to allow self-signed server certs. Should be set to true
      if server has a certificate signed from a trusted CA
    * Added timeout-handling for requests to abort request server doesn't send a response
    
* 20160210, V0.0.3
    * Added error handling for invalid JSON returned with response
    * Revised license information to provide a SPDX 2.0 license identifier in consonance with npm v2.1 guidelines on 
      license metadata - see also https://github.com/npm/npm/releases/tag/v2.10.0
    * Dependency updates
    
* 20160306, V0.0.4
    * Replaced deprecated use of Promise.settle()
    * Dependency updates
    
* 20160402, V0.0.5
    * Dependency updates
    * Moved release history to separate file
    * Added license info to README
    
* 20160512, V0.0.6
    * Replaced dependency on lodash with lightweight packages lodash.assign and lodash.isundefined
    * Dependency updates
    * Added travis build descriptor and build badge
