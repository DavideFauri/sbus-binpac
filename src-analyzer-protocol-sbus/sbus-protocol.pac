# Developed by Davide Fauri (TU Eindhoven) - d.fauri@tue.nl


# Types are your basic building blocks.
# There are some builtins, or you can define your own.
# Here's a definition for a regular expression:
# type SAMPLE_WHITESPACE = RE/[ \t]*/;

# A record is a collection of types.
# Here's one with the built-in types
# type example = record {
#   
# };

enum attribute_values {
  SBUS_REQUEST                       =0x00,
  SBUS_RESPONSE                      =0x01,
  SBUS_ACKNAK                        =0x02,
};

enum command_codes {
  # commands
  SBUS_RD_COUNTER                    =0x00,
  SBUS_RD_DISPLAY_REGISTER           =0x01,
  SBUS_RD_FLAG                       =0x02,
  SBUS_RD_INPUT                      =0x03,
  SBUS_RD_RTC                        =0x04,
  SBUS_RD_OUTPUT                     =0x05,
  SBUS_RD_REGISTER                   =0x06,
  SBUS_RD_TIMER                      =0x07,

  SBUS_WR_COUNTER                    =0x0A,
  SBUS_WR_FLAG                       =0x0B,
  SBUS_WR_RTC                        =0x0C,
  SBUS_WR_OUTPUT                     =0x0D,
  SBUS_WR_REGISTER                   =0x0E,
  SBUS_WR_TIMER                      =0x0F,
  
  SBUS_RDWR_MULTI_MEDIAS             =0x13,

  SBUS_RD_PCD_STATUS_CPU0            =0x14,
  SBUS_RD_PCD_STATUS_CPU1            =0x15,
  SBUS_RD_PCD_STATUS_CPU2            =0x16,
  SBUS_RD_PCD_STATUS_CPU3            =0x17,
  SBUS_RD_PCD_STATUS_CPU4            =0x18,
  SBUS_RD_PCD_STATUS_CPU5            =0x19,
  SBUS_RD_PCD_STATUS_CPU6            =0x1A,
  SBUS_RD_PCD_STATUS_OWN             =0x1B,

  SBUS_RD_SBUS_STN_NBR               =0x1D,
  SBUS_RD_USER_MEMORY                =0x1E,
  SBUS_RD_PROGRAM_LINE               =0x1F,
  SBUS_RD_PROGRAM_VERSION            =0x20,
  SBUS_RD_TEXT                       =0x21,
  SBUS_RD_ACTIVE_TRANSITION          =0x22,

  SBUS_WR_USER_MEMORY                =0x23,
  SBUS_WR_PROGRAM_LINE               =0x24,
  SBUS_WR_TEXT                       =0x25,

  SBUS_RUN_PROCEDURE_CPU0            =0x28,
  SBUS_RUN_PROCEDURE_CPU1            =0x29,
  SBUS_RUN_PROCEDURE_CPU2            =0x2A,
  SBUS_RUN_PROCEDURE_CPU3            =0x2B,
  SBUS_RUN_PROCEDURE_CPU4            =0x2C,
  SBUS_RUN_PROCEDURE_CPU5            =0x2D,
  SBUS_RUN_PROCEDURE_CPU6            =0x2E,
  SBUS_RUN_PROCEDURE_OWN             =0x2F,
  SBUS_RUN_PROCEDURE_ALL             =0x30,

  SBUS_RESTART_COLD_CPU1             =0x32,
  SBUS_RESTART_COLD_CPU2             =0x33,
  SBUS_RESTART_COLD_CPU3             =0x34,
  SBUS_RESTART_COLD_CPU4             =0x35,
  SBUS_RESTART_COLD_CPU5             =0x36,
  SBUS_RESTART_COLD_CPU6             =0x37,
  SBUS_RESTART_COLD_OWN              =0x38,
  SBUS_RESTART_COLD_ALL              =0x39,

  SBUS_STOP_PROCEDURE_CPU0           =0x3C,
  SBUS_STOP_PROCEDURE_CPU1           =0x3D,
  SBUS_STOP_PROCEDURE_CPU2           =0x3E,
  SBUS_STOP_PROCEDURE_CPU3           =0x3F,
  SBUS_STOP_PROCEDURE_CPU4           =0x40,
  SBUS_STOP_PROCEDURE_CPU5           =0x41,
  SBUS_STOP_PROCEDURE_CPU6           =0x42,
  SBUS_STOP_PROCEDURE_OWN            =0x43,
  SBUS_STOP_PROCEDURE_ALL            =0x44,

  SBUS_RD_STATUSFLAG_ACCU            =0x46,
  SBUS_RD_BYTE                       =0x47,
  SBUS_RD_HALT_FAILURE_REG           =0x48,
  SBUS_RD_INDEX_REGISTER             =0x49,
  SBUS_RD_INSTRUCTION_POINTER        =0x4A,
  SBUS_FIND_HISTORY                  =0x4B,
  SBUS_WR_STATUSFLAG_ACCU            =0x50,
  SBUS_WR_BYTE                       =0x51,
  SBUS_WR_INDEX_REGISTER             =0x52,
  SBUS_WR_INSTRUCTION_POINTER        =0x53,

  SBUS_CLEAR_ALL                     =0x5A,
  SBUS_CLEAR_FLAGS                   =0x5B,
  SBUS_CLEAR_OUTPUTS                 =0x5C,
  SBUS_CLEAR_REGISTERS               =0x5D,
  SBUS_CLEAR_TIMERS                  =0x5E,

  SBUS_RESTART_WARM_CPU1             =0x64,
  SBUS_RESTART_WARM_CPU2             =0x65,
  SBUS_RESTART_WARM_CPU3             =0x66,
  SBUS_RESTART_WARM_CPU4             =0x67,
  SBUS_RESTART_WARM_CPU5             =0x68,
  SBUS_RESTART_WARM_CPU6             =0x69,
  SBUS_RESTART_WARM_OWN              =0x6A,
  SBUS_RESTART_WARM_ALL              =0x6B,


  # Programming
  SBUS_CHANGE_BLOCK                  =0x6E,
  SBUS_CLEAR_HISTORY_FAILURE         =0x6F,
  SBUS_DELETE_PROGRAM_LINE           =0x70,
  SBUS_GO_CONDITIONAL                =0x71,
  SBUS_INSERT_PROGRAM_LINE           =0x72,
  SBUS_LOCAL_CYCLE                   =0x73,
  SBUS_ALL_CYCLES                    =0x74,
  SBUS_MAKE_TEXT                     =0x75,
  SBUS_EXECUTE_SINGLE_INSTR          =0x76,
  SBUS_SINGLE_STEP                   =0x77,

  # Interrupts
  SBUS_XOB_17_INTERRUPT              =0x82,
  SBUS_XOB_18_INTERRUPT              =0x83,
  SBUS_XOB_19_INTERRUPT              =0x84,

  # Stuff
  SBUS_RD_HANGUP_TIMEOUT             =0x91,
  SBUS_RD_DATA_BLOCK                 =0x96,
  SBUS_WR_DATA_BLOCK                 =0x97,
  SBUS_MAKE_DATA_BLOCK               =0x98,
  SBUS_CLEAR_DATA_BLOCK              =0x99,
  SBUS_CLEAR_TEXT                    =0x9A,
  SBUS_RD_BLOCK_ADDRESSES            =0x9B,
  SBUS_RD_BLOCK_SIZES                =0x9C,
  SBUS_RD_CURRENT_BLOCK              =0x9D,
  SBUS_RD_CALL_STACK                 =0x9E,
  SBUS_RD_DBX                        =0x9F,
  SBUS_RD_USER_EEPROM_REGISTER       =0xA1,
  SBUS_WR_USER_EEPROM_REGISTER       =0xA3,
  SBUS_ERASE_FLASH                   =0xA5,
  SBUS_RESTART_COLD_FLAG             =0xA6,
  SBUS_WR_SYSTEM_BUFFER              =0xA7,
  SBUS_RD_SYSTEM_BUFFER              =0xA8,
  SBUS_RD_WR_PCD_BLOCK               =0xA9,
  SBUS_GET_DIAGNOSTIC                =0xAA,
  SBUS_RD_SYSTEM_INFORMATION         =0xAB,
  SBUS_CHANGE_BLOCKS_ON_RUN          =0xAC,
  SBUS_FLASHCARD_TELEGRAM            =0xAD,
  SBUS_DOWNLOAD_FIRMWARE             =0xAE,
  SBUS_WEB_SERVER_SERIAL_COMM        =0xAF,
};

enum acknak_codes {
  ACKNOWLEDGED                       =0,
  NAK_NO_REASON                      =1,
  NAK_BECAUSE_PASSWORD               =2,
  NAK_PGU_PORT_IN_REDUCED_PROTOCOL   =3,
  NAK_PGU_PORT_ALREADY_IN_USE        =4,
};

# Main Sbus PDU
type Sbus_PDU(is_orig: bool) = record {
  header: Sbus_Header;
  body: case header.att of {
    SBUS_REQUEST  -> request:  Sbus_Request(header);
    SBUS_RESPONSE -> response: Sbus_Response(header);
    SBUS_ACKNAK   -> acknak:   Sbus_Acknak(header);
    default       -> unknown:  bytestring &restofdata;
  };
  crc:  uint32;
} &let {
  deliver: bool = $context.flow.deliver_Sbus_PDU(this);
} &length=header.len &byteorder=bigendian;



type Sbus_Header = record {
  len: uint32; # Length in bytes (including crc)
  ver: uint8;  # Version
  pro: uint8;  # Protocol type identifier
  seq: uint16; # Sequence number
  att: uint8;  # Telegram attribute
  data_length: len - 9 - 2; # length without header, crc
} &let {
  deliver: bool = $context.flow.deliver_message(this);
} &length=9;




type Sbus_Request(header: Sbus_Header) = record {
  destination: uint8;
  command: uint8;

  case command of {

    # All the rest (unimplemented)
    default                       -> unknown:               DefaultRequest(header);
  }
};

type Sbus_Response(header: Sbus_Header) = case header.fc of {

  # All the rest (unimplemented)
  default                       -> unknown:                 DefaultResponse(header);
};


type Sbus_Acknak(header: Sbus_Header) = record {
  acknak_code: uint16;

  case acknak_code of {
    ACKNOWLEDGED                      -> is_ack: bool = true;

    NAK_NO_REASON                     -> is_ack: bool = false;
    NAK_BECAUSE_PASSWORD              -> is_ack: bool = false;
    NAK_PGU_PORT_IN_REDUCED_PROTOCOL  -> is_ack: bool = false;
    NAK_PGU_PORT_ALREADY_IN_USE       -> is_ack: bool = false;

    # All the rest (unimplemented)
    default                           -> unknown:                 bytestring &restofdata;
  }
};



# REQUEST DEFAULT
type DefaultRequest(header: Sbus_Header) = record {
};



type DefaultResponse(header: Sbus_Header) = record {
};

